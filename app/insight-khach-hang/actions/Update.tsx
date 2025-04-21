import { Button } from '@/components/ui/Button';
import LoadingIcon from '@/components/ui/LoadingIcon';
import { CustomerInsightEntity } from '@/entities/customer-insight';
import { updateCustomerInsight } from '@/services/customer-insight';
import { CUSTOMER_INSIGHT_AGE, CUSTOMER_INSIGHT_TIME } from '@prisma/client';
import { Editor } from '@tinymce/tinymce-react';
import { Form, Modal, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface UpdateProps {
  open: boolean
  onClose: () => void
  setRefreshKey: React.Dispatch<React.SetStateAction<boolean>>
  data?: CustomerInsightEntity
}

interface FormValues {
  age: CUSTOMER_INSIGHT_AGE
  time: CUSTOMER_INSIGHT_TIME
}

function Update(props: UpdateProps) {
  const { open, onClose, setRefreshKey, data } = props;

  const [loading, setLoading] = useState(false);
  const [customerStatus, setCustomerStatus] = useState('');
  const [conclude, setConclude] = useState('')
  const [solution, setSolution] = useState('')

  const [form] = Form.useForm();

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        age: data.age,
        time: data.time
      })
    }
  }, [data, form])

  if (!data) {
    return
  }

  const onSubmit = async ({ time, age }: FormValues) => {
    setLoading(true);
    try {
      await updateCustomerInsight({ id: data.id, data: { time, age, customerStatus, conclude, solution } })
      toast.success('Cập nhật thông tin thành công');
      setRefreshKey(pre => !pre);
      onClose();

    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
      }
    } finally {
      setLoading(false)
    }
  }
  return (
    <Modal
      open={open}
      onClose={onClose}
      onCancel={onClose}
      className='!w-2/3 !top-2'
      footer={false}
    >
      <h1 className="py-4 text-2xl font-bold text-center">Chỉnh sửa nội dung</h1>
      <div className="p-4">
        <Form form={form} onFinish={onSubmit} initialValues={{ keyword: '' }}>
          <div className="flex items-center h-[40px] mb-6">
            <p className="w-[106px] text-left text-[#2563eb]">Độ tuổi</p>
            <Form.Item
              className="!mb-0 w-full flex-1"
              name="age"
              rules={[
                {
                  required: true,
                  message: "Trường này là bắt buộc"
                },
              ]}
            >
              <Select
                placeholder="Chọn độ tuổi"
                options={[
                  { label: 'Độ tuổi dưới 30 tuổi', value: 'UNDER_30' },
                  { label: 'Độ tuổi 30- 45 tuổi', value: 'FROM_30_TO_45' },
                  { label: 'Độ tuổi trên 45 tuổi', value: 'ABOVE_45' }
                ]}
              />
            </Form.Item>
          </div>
          <div className="flex items-center h-[40px] mb-6">
            <p className="w-[106px] text-left text-[#2563eb]">Thời điểm</p>
            <Form.Item
              className="!mb-0 w-full flex-1"
              name="time"
              rules={[
                {
                  required: true,
                  message: "Trường này là bắt buộc"
                },
              ]}
            >
              <Select
                placeholder="Chọn thời điểm xuất hiện nám"
                options={[
                  { label: 'Nám xuất hiện từ lúc nhỏ', value: 'SINCE_CHILDHOOD' },
                  { label: 'Nám xuất hiện từ lúc dậy thì', value: 'SINCE_PUBERTY' },
                  { label: 'Nám xuất hiện sau sinh', value: 'AFTER_GIVING_BIRTH' },
                  { label: 'Nám xuất hiện tiền mãn kinh', value: 'PERIMENOPAUSE' }
                ]}
              />
            </Form.Item>
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <p className="w-[106px] text-left text-[#2563eb]">Đánh giá tình trạng</p>
              <Editor
                apiKey="hkoepxco9p2gme5kius6axtlk3n83yberu5a59m56l7dhgn3"
                value={customerStatus}
                onEditorChange={(newContent) => setCustomerStatus(newContent)}
                init={{
                  height: 200,
                  flex: 1,
                  menubar: false,
                  extended_valid_elements: "iframe[src|frameborder|style|scrolling|class|width|height|name|align]",
                  valid_elements: '*[*]',
                  plugins: [
                    'table',
                    'media',
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic backcolor | ' +
                    'alignleft aligncenter alignright alignjustify | ' +
                    'bullist numlist outdent indent | table | forecolor | removeformat | media',
                  setup: (editor) => {
                    editor.on('init', () => {
                      editor.setContent(data.customerStatus)
                    })
                  }
                }}
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <p className="w-[106px] text-left text-[#2563eb]">Kết luận</p>
              <Editor
                apiKey="hkoepxco9p2gme5kius6axtlk3n83yberu5a59m56l7dhgn3"
                value={conclude}
                onEditorChange={(newContent) => setConclude(newContent)}
                init={{
                  height: 200,
                  flex: 1,
                  menubar: false,
                  extended_valid_elements: "iframe[src|frameborder|style|scrolling|class|width|height|name|align]",
                  valid_elements: '*[*]',
                  plugins: [
                    'table',
                    'media',
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic backcolor | ' +
                    'alignleft aligncenter alignright alignjustify | ' +
                    'bullist numlist outdent indent | table | forecolor | removeformat | media',
                  setup: (editor) => {
                    editor.on('init', () => {
                      editor.setContent(data.conclude)
                    })
                  }
                }}
              />
            </div>
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <p className="w-[106px] text-left text-[#2563eb]">Giải pháp</p>
              <Editor
                apiKey="hkoepxco9p2gme5kius6axtlk3n83yberu5a59m56l7dhgn3"
                value={solution}
                onEditorChange={(newContent) => setSolution(newContent)}
                init={{
                  height: 200,
                  flex: 1,
                  menubar: false,
                  extended_valid_elements: "iframe[src|frameborder|style|scrolling|class|width|height|name|align]",
                  valid_elements: '*[*]',
                  plugins: [
                    'table',
                    'media',
                  ],
                  toolbar:
                    'undo redo | formatselect | bold italic backcolor | ' +
                    'alignleft aligncenter alignright alignjustify | ' +
                    'bullist numlist outdent indent | table | forecolor | removeformat | media',
                  setup: (editor) => {
                    editor.on('init', () => {
                      editor.setContent(data.solution)
                    })
                  }
                }}
              />
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

export default Update