import React, { useEffect, useState } from 'react';
import { Form,  Select, Modal } from 'antd';
import { useFileCategories } from '@/zustand/file-categories';
import { Button } from '@/components/ui/Button';
import LoadingIcon from '@/components/ui/LoadingIcon';
import { updateFileCategory } from '@/services/files';
import { FilesEntity } from '@/entities/files';

interface UpdateFileCategoryProps {
  open: boolean
  onClose: () => void
  setRefreshKey: React.Dispatch<React.SetStateAction<boolean>>
  file: FilesEntity
}
function UpdateFileCategory(props: UpdateFileCategoryProps) {
  const { open, onClose, file, setRefreshKey } = props
  const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();
  const { fileCategories } = useFileCategories();

  useEffect(() => {
    form.setFieldsValue({
      slug: file.fileCategorySlug
    })
  }, [file.fileCategorySlug, form])

  const onSubmit = async (data: { slug: string }) => {
    setLoading(true);
    try {
      await updateFileCategory({ id: file.id, fileCategorySlug: data.slug})
      setRefreshKey(pre => !pre)
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal
      onClose={onClose}
      onCancel={(onClose)}
      open={open}
      footer={false}
    >
      <h1 className="mb-4 text-2xl font-bold text-center">Thêm mới nội dung</h1>
      <div>
        <Form form={form} onFinish={onSubmit}>
          <div className="flex items-center flex-col py-4 border-b mb-4">
            <div className="flex items-center h-[48px] w-full mb-6">
              <p className="w-[106px] text-left text-[#2563eb]">Danh mục</p>
              <Form.Item
                className="!mb-0 w-full flex-1"
                name="slug"
                rules={[
                  {
                    required: true,
                    message: "Trường này là bắt buộc"
                  },
                ]}
              >
                <Select options={fileCategories?.map(item => ({ label: item.title, value: item.slug }))} placeholder="Chọn danh mục" />
              </Form.Item>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Button variant='danger' onClick={onClose}>Hủy</Button>
            <Button variant='primary' type="submit">
              Xác nhận
              {loading && <LoadingIcon />}
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  )
}

export default UpdateFileCategory