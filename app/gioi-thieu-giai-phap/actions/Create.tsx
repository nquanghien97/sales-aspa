import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import LoadingIcon from '@/components/ui/LoadingIcon'
import { Editor } from '@tinymce/tinymce-react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Form, Modal } from "antd";
import { createSolution } from '@/services/solutions'

interface CreateUserProps {
  open: boolean
  onClose: () => void
  setRefreshKey: React.Dispatch<React.SetStateAction<boolean>>
}

interface FormValues {
  keyword: string
}

function CreateUser(props: CreateUserProps) {
  const { open, onClose, setRefreshKey } = props;

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('')

  const [form] = Form.useForm();

  const handleClose = () => {
    onClose();
    setContent('')
    form.setFieldsValue({
      keyword: '',
    })
  }

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      
      await createSolution({
        keyword: data.keyword,
        content,
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
      <h1 className="p-4 text-2xl font-bold text-center">Thêm mới nội dung</h1>
      <div className="p-4">
        <Form form={form} onFinish={onSubmit} initialValues={{ keyword: '' }}>
          <div className="flex items-center h-[40px] mb-6">
            <p className="w-[106px] text-left text-[#2563eb]">Từ khóa</p>
            <Form.Item
              className="!mb-0 w-full flex-1"
              name="keyword"
              rules={[
                {
                  required: true,
                  message: "Trường này là bắt buộc"
                },
              ]}
            >
              <Input className="py-2" />
            </Form.Item>
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <p className="w-[106px] text-left text-[#2563eb]">Nội dung</p>
              <Editor
                apiKey="hkoepxco9p2gme5kius6axtlk3n83yberu5a59m56l7dhgn3"
                value={content}
                onEditorChange={(newContent) => setContent(newContent)}
                init={{
                  height: 600,
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