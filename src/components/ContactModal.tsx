'use client'

import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea } from "@nextui-org/react";

interface ModalProps {
  isOpen: boolean
  onOpenChange: () => void
}

export default function ContactModal({ isOpen, onOpenChange }: ModalProps) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="dark:bg-content1-800">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Are you talking to me?</ModalHeader>
            <ModalBody>
              <Input
                type="text"
                label="Name"
                classNames={{ 
                  input: ["dark:bg-content1-700"],
                  innerWrapper: ["dark:bg-content1-700"], 
                  inputWrapper: ["dark:bg-content1-700", "dark:group-data-[focus=true]:bg-content1-700"]
                }}
              />
              <Input
                type="email"
                label="Email"
                classNames={{ 
                  input: ["dark:bg-content1-700"],
                  innerWrapper: ["dark:bg-content1-700"], 
                  inputWrapper: ["dark:bg-content1-700", "dark:group-data-[focus=true]:bg-content1-700"]
                }}
              />
              <Textarea
                label="Message"
                classNames={{ 
                  input: ["dark:bg-content1-700"],
                  innerWrapper: ["dark:bg-content1-700"], 
                  inputWrapper: ["dark:bg-content1-700", "dark:group-data-[focus=true]:bg-content1-700"]
                }}
              />
            </ModalBody>
            <ModalFooter>
              <Button className="text-content1-50 dark:text-content1-900" color="primary" onPress={onClose}>
                Send
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
