import { Button } from '@/components/ui/Button';
import LoadingIcon from '@/components/ui/LoadingIcon';
import { createBulkCustomers } from '@/services/customers';
import { Form, Modal, Table, TableColumnsType } from 'antd';
import React, { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify';
import * as XLSX from "xlsx";

interface DataRow {
  'Họ tên': string;
  'Số điện thoại': string;
  'Nghề nghiệp': string;
  'Tỉnh/Thành phố': string;
  'Quận/Huyện': string;
  'Phường/Xã': string;
  'Địa chỉ chi tiết': string;
}

interface CreateBulkCustomersProps {
  open: boolean;
  onClose: () => void;
  setRefreshKey: React.Dispatch<React.SetStateAction<boolean>>
}

const columns: TableColumnsType = [
  {
    title: 'Họ tên',
    dataIndex: 'Họ tên',
    key: '1'
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'Số điện thoại',
    key: '2',
  },
  {
    title: 'Nghề nghiệp',
    dataIndex: 'Nghề nghiệp',
    key: '3'
  },
  {
    title: 'Tỉnh/Thành phố',
    dataIndex: 'Tỉnh/Thành phố',
    key: '4'
  },
  {
    title: 'Quận/Huyện',
    dataIndex: 'Quận/Huyện',
    key: '5',
  },
  {
    title: 'Phường/Xã',
    dataIndex: 'Phường/Xã',
    key: '6'
  },
  {
    title: 'Địa chỉ chi tiết',
    dataIndex: 'Địa chỉ chi tiết',
    key: '7'
  },
]

function CreateBulkCustomers(props: CreateBulkCustomersProps) {
  const { open, onClose, setRefreshKey } = props;

  const [dataImport, setDataImport] = useState<DataRow[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleFileUpload = (e : ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if(file) {
      const reader = new FileReader();
  
      reader.onload = (event) => {
        const workbook = XLSX.read(event.target?.result, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const sheetData: DataRow[] = XLSX.utils.sheet_to_json(sheet, { raw: false, dateNF: 'yyy-mm-dd'});
  
        setDataImport(sheetData);
      };
  
      reader.readAsArrayBuffer(file);
    }
    e.target.value = '';
  };

  const onFinish = async () => {
    setLoading(true);
    const dataSubmit = dataImport?.map(item => ({
      fullName: item['Họ tên'],
      phoneNumber: item['Số điện thoại'],
      job: item['Nghề nghiệp'],
      province: item['Tỉnh/Thành phố'],
      district: item['Quận/Huyện'],
      ward: item['Phường/Xã'],
      address: item['Địa chỉ chi tiết'],
    }));
    if(!dataSubmit) {
      toast.warning('Bạn cần import dữ liệu')
      return;
    }
    try {
      await createBulkCustomers(dataSubmit)
      toast.success('Thêm khách hàng thành công')
      setRefreshKey(pre => !pre)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <label htmlFor="input">
        <div className="flex justify-center">
          <Button variant='primary'>Thêm mới hàng loạt</Button>
        </div>
        <input type="file" onChange={handleFileUpload} id="input" className="!hidden" />
      </label>
      <Modal open={open} onCancel={onClose} onClose={onClose} footer={false} className="!w-1/2">
        <Form form={form} onFinish={onFinish}>
        {dataImport && (
          <>
            <Table dataSource={dataImport} columns={columns} rowKey={(record) => record['Số điện thoại']} pagination={false} />
            <div className="flex justify-evenly py-4">
              <Button variant="danger" onClick={onClose}>Hủy</Button>
              <Button variant="primary" type="submit">
                Xác nhận
                {loading && <LoadingIcon />}
              </Button>
            </div>
          </>
        )}
        </Form>
      </Modal>
    </>
  )
}

export default CreateBulkCustomers