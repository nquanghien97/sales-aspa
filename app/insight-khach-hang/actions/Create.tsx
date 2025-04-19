import { Button } from '@/components/ui/Button'
import LoadingIcon from '@/components/ui/LoadingIcon'
import { Editor } from '@tinymce/tinymce-react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Form, Modal, Select } from "antd";
import { createCustomerInsight } from '@/services/customer-insight'
import { CUSTOMER_INSIGHT_AGE, CUSTOMER_INSIGHT_TIME } from '@prisma/client'

interface CreateUserProps {
  open: boolean
  onClose: () => void
  setRefreshKey: React.Dispatch<React.SetStateAction<boolean>>
}

interface FormValues {
  time: CUSTOMER_INSIGHT_TIME
  age: CUSTOMER_INSIGHT_AGE
}

function CreateUser(props: CreateUserProps) {
  const { open, onClose, setRefreshKey } = props;

  const [loading, setLoading] = useState(false);
  const [customerStatus, setCustomerStatus] = useState('');
  const [conclude, setConclude] = useState('')
  const [solution, setSolution] = useState('')

  const [form] = Form.useForm();

  const handleClose = () => {
    onClose();
    setCustomerStatus('')
    setConclude('')
    setSolution('')
    form.setFieldsValue({
      time: '',
      age: ''
    })
  }

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {

      await createCustomerInsight({
        time: data.time,
        age: data.age,
        customerStatus,
        conclude,
        solution
      })

      setRefreshKey(pre => !pre);
      handleClose();
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
        toast.error(e.message)
      }
    } finally {
      setLoading(false);
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
      <h1 className="py-4 text-2xl font-bold text-center">Thêm mới nội dung</h1>
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
                  { label: 'Độ tuổi 30- 40 tuổi', value: 'FROM_30_TO_40' },
                  { label: 'Độ tuổi 40 - 60 tuổi', value: 'FROM_40_TO_60' },
                  { label: 'Độ tuổi trên 60 tuổi', value: 'ABOVE_60' }
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
                  { label: 'Nám xuất hiện sau sinh , tiền mãn kinh', value: 'AFTER_BIRTH_AND_PERIMENOPAUSE' }
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
                    'bullist numlist outdent indent | table | forecolor | removeformat | media'
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
                    'bullist numlist outdent indent | table | forecolor | removeformat | media'
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
                    'bullist numlist outdent indent | table | forecolor | removeformat | media'
                }}
              />
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Button variant='danger' onClick={handleClose}>Hủy</Button>
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

export default CreateUser