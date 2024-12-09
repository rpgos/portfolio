'use client'

import sendEmail from "@/actions/send-email";
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea } from "@nextui-org/react";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface ModalProps {
  isOpen: boolean
  onOpenChange: () => void
  onClose: () => void
}

export default function ContactModal({ isOpen, onOpenChange, onClose }: ModalProps) {
  const [formState, action, pending] = useActionState(sendEmail, { success: false, errors: {} })
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    if(formState.success) {
      setName('')
      setEmail('')
      setMessage('')
      onClose()
      toast('Message sent! Talk to you soon, thank you.', { icon: '🤝' })
    }
  }, [formState.success])

  return (
    <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} className="dark:bg-content1-800">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Are you talking to me?</ModalHeader>
        <form action={action}>
          <ModalBody>
            <Input
              type="text"
              label="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              isInvalid={!!formState.errors?.name}
              errorMessage={formState.errors?.name?.join(', ')}
              classNames={{ 
                input: ["dark:bg-content1-700"],
                innerWrapper: ["dark:bg-content1-700"], 
                inputWrapper: ["dark:bg-content1-700", "dark:group-data-[focus=true]:bg-content1-700"]
              }}
            />
            <Input
              type="email"
              label="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!formState.errors?.email}
              errorMessage={formState.errors?.email?.join(', ')}
              classNames={{ 
                input: ["dark:bg-content1-700"],
                innerWrapper: ["dark:bg-content1-700"], 
                inputWrapper: ["dark:bg-content1-700", "dark:group-data-[focus=true]:bg-content1-700"]
              }}
            />
            <Textarea
              label="Message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              isInvalid={!!formState.errors?.message}
              errorMessage={formState.errors?.message?.join(', ')}
              classNames={{ 
                input: ["dark:bg-content1-700"],
                innerWrapper: ["dark:bg-content1-700"], 
                inputWrapper: ["dark:bg-content1-700", "dark:group-data-[focus=true]:bg-content1-700"]
              }}
            />
          </ModalBody>
          <ModalFooter>
            <Button isLoading={pending} type="submit" className="text-content1-50 dark:text-content1-900" color="primary">
              Send
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}
