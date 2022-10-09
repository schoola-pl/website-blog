import React, { useRef } from 'react';
import Modal from 'react-modal';
import { Input } from 'components/atoms/core/Input';
import { Label } from 'components/atoms/core/Label';
import { S } from './WaitlistModal.styles';
import toast from 'react-hot-toast';
import axios from 'axios';

interface WaitlistModalProps {
  isOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
}

export const WaitlistModal = ({ isOpen, setModalOpen }: WaitlistModalProps) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const facilityRef = useRef<HTMLInputElement>(null);

  const handleSendToSlack = async (e: any) => {
    e.preventDefault();

    await axios
      .post(`https://hook.eu1.make.com/8odfupxw5ghkxx8y4vy4yssnlce69i2i`, {
        email: emailRef.current?.value,
        facility: facilityRef.current?.value,
      })
      .then(() => {
        setModalOpen(false);
        toast.success('Zapisaliśmy ciebie na listę oczekujących!', {
          position: 'top-center',
          style: {
            zIndex: 9999,
            fontSize: '1.4rem',
          },
        });
        emailRef.current!.value = '';
        facilityRef.current!.value = '';
      });
  };

  return (
    <Modal isOpen={isOpen} style={S.modalStyles} ariaHideApp={false}>
      <S.ModalContentWrapper onSubmit={handleSendToSlack}>
        <S.InfoWrapper>
          <S.CloseModalButton onClick={() => setModalOpen(!isOpen)}>
            x
          </S.CloseModalButton>
          <S.Heading>
            comm<span>unite</span>
          </S.Heading>
          <p>Zapisz się na listę oczekujących i pozostań z nami w kontakcie!</p>
        </S.InfoWrapper>
        <S.ModalLabel caption="Nazwa placówki">
          <Input
            placeholder="Liceum nr. 1 w Jastrzębiej Górze"
            ref={facilityRef}
            required
          />
        </S.ModalLabel>
        <S.ModalLabel caption="E-mail">
          <Input placeholder="mail@example.com" ref={emailRef} required />
        </S.ModalLabel>
        <S.CheckboxWrapper>
          <input type="checkbox" required />
          <Label caption="Akceptuję politykę prywatności i wyrażam zgodę na kontakt" />
        </S.CheckboxWrapper>
        <S.ModalSubmitButton type="submit">Zapisz się!</S.ModalSubmitButton>
      </S.ModalContentWrapper>
    </Modal>
  );
};
