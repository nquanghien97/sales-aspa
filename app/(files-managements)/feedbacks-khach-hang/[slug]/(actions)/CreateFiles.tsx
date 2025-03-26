import { Button } from '@/components/ui/Button';
import LoadingIcon from '@/components/ui/LoadingIcon';
import { createFiles } from '@/services/files';
import { Form, Upload, Image, UploadFile, Modal } from 'antd';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

interface CreateFilesProps {
  open: boolean
  onClose: () => void
  setRefreshKey: React.Dispatch<React.SetStateAction<boolean>>
}

function CreateFiles(props: CreateFilesProps) {
  const { open, onClose, setRefreshKey } = props;
  const [feedbacks, setFeedbacks] = useState<UploadFile[]>([]);
  const [loading, setLoading] = useState(false);

  const params = useParams()

  const [form] = Form.useForm();

  const handleClose = () => {
    onClose();
    setFeedbacks([])
  }

  const onSubmit = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      feedbacks.forEach((file) => {
        formData.append("FEEDBACKS", file as unknown as File); // Không có [] trong key
      });
      formData.append('slug', params.slug as string)
      await createFiles({
        category: 'FEEDBACKS',
        data: formData
      })
      toast.success('Tạo tư liệu thành công')
      setRefreshKey(pre => !pre)
      handleClose();
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
        toast.error(err.message)
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      className="!w-1/2"
      footer={false}
    >
      <h1 className="mb-4 text-2xl font-bold text-center">Thêm mới nội dung</h1>
      <div>
        <Form form={form} onFinish={onSubmit}>
          <div className="flex items-center flex-col py-4 border-b mb-4">
            <div className="flex items-center w-full h-full mb-4">
              <p className="w-[106px] text-left text-[#2563eb]">Chọn file</p>
              <div className="flex items-center flex-1">
                <Form.Item name="feedbacks" className="!m-0">
                  <Upload
                    multiple
                    showUploadList
                    fileList={feedbacks}
                    beforeUpload={(file) => {
                      setFeedbacks((prev) => [...prev, file]); // Lưu file vào state
                      return false; // Ngăn không upload ngay lập tức
                    }}
                    onRemove={(file) => {
                      setFeedbacks((prev) => prev.filter((item) => item.uid !== file.uid))
                    }}
                  >
                    <Button>Chọn hình ảnh hoặc video</Button>
                  </Upload>
                </Form.Item>
                {feedbacks.length !== 0 && (
                  <div className="flex flex-wrap justify-center w-full py-4 gap-4">
                    {
                      feedbacks.map((file, index) => {
                        if (file.type?.startsWith('image/')) {
                          return (
                            <Image.PreviewGroup key={index}>
                              <Image className="border-2 m-auto cursor-pointer" width={300} height={300} src={URL.createObjectURL(file as unknown as File)} alt="preview avatar" />
                            </Image.PreviewGroup>
                          )
                        }
                        if (file.type?.startsWith('video/')) {
                          return (
                            <video
                              key={index}
                              controls
                              width={300}
                              height={300}
                              className='h-[180px]'
                            >
                              <source className="border-2 m-auto cursor-pointer" width={100} height={100} src={URL.createObjectURL(file as unknown as File)} />
                            </video>
                          )
                        }
                      })
                    }
                  </div>
                )}
              </div>
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

export default CreateFiles