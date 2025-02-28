import { Button } from '@/components/ui/Button'
import LoadingIcon from '@/components/ui/LoadingIcon'
import Modal from '@/components/ui/Modal'
import { ProposalEntity } from '@/entities/proposal'
import { approveProposal } from '@/services/proposal'
import { Editor } from '@tinymce/tinymce-react'
import { Alert, Form } from 'antd'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

interface ApproveProposalProps {
  open: boolean
  onClose: () => void
  setRefreshKey: React.Dispatch<React.SetStateAction<boolean>>
  proposal: ProposalEntity
}

const optionsCategory = {
  INSIGHT_MOTHER: 'INSIGHT CỦA MẸ',
  HANDLE_REJECTION: 'XỬ LÝ TỪ CHỐI'
}

function ApproveProposal(props: ApproveProposalProps) {
  const { open, onClose, setRefreshKey, proposal } = props;
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');
  const [form] = Form.useForm();

  const handleClose = () => {
    onClose();
  }

  const onSubmit = async () => {
    setLoading(true)
    try {
      await approveProposal({
        keyword: proposal.keyword,
        content,
        category: proposal.categoryType,
        proposalId: proposal.id
      })
      setRefreshKey(pre => !pre)
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
      onClose={() => { }}
      className='w-1/2'
    >
      <h1 className="mb-4 text-2xl font-bold text-center">Thêm mới đề xuất</h1>
      <div>
        <Form form={form} onFinish={onSubmit}>
          <div className="flex items-center h-[40px] mb-6">
            <p className="w-[106px] text-left text-[#2563eb]">Từ khóa</p>
            <Alert message={proposal.keyword} className="w-full flex-1" />
          </div>
          <div className="flex items-center h-[40px] mb-6">
            <p className="w-[106px] text-left text-[#2563eb]">Danh mục</p>
            <Alert message={optionsCategory[proposal.categoryType]} className="w-full flex-1" />
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <p className="w-[106px] text-left text-[#2563eb]">Nội dung</p>
              <Editor
                apiKey="hkoepxco9p2gme5kius6axtlk3n83yberu5a59m56l7dhgn3"
                value={content}
                onEditorChange={(newContent) => setContent(newContent)}
                init={{
                  height: 300,
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

export default ApproveProposal