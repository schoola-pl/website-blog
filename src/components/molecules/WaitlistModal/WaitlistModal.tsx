import React, { useRef } from 'react';
import Modal from 'react-modal';
import { Input } from 'components/atoms/core/Input';
import { Label } from 'components/atoms/core/Label';
import { Button } from 'components/atoms/core/Button';
import toast from 'react-hot-toast';
import axios from 'axios';
import styled from 'styled-components';

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
      .post(`${process.env.NEXT_MAKE_URL}`, {
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
    <Modal isOpen={isOpen} style={modalStyles} ariaHideApp={false}>
      <ModalContentWrapper onSubmit={handleSendToSlack}>
        <InfoWrapper>
          <CloseModalButton onClick={() => setModalOpen(!isOpen)}>
            x
          </CloseModalButton>
          <Heading>
            comm<span>unite</span>
          </Heading>
          <p>Zapisz się na listę oczekujących i pozostań z nami w kontakcie!</p>
        </InfoWrapper>
        <ModalLabel caption="Nazwa placówki">
          <Input
            placeholder="Liceum nr. 1 w Jastrzębiej Górze"
            ref={facilityRef}
            required
          />
        </ModalLabel>
        <ModalLabel caption="E-mail">
          <Input placeholder="mail@example.com" ref={emailRef} required />
        </ModalLabel>
        <CheckboxWrapper>
          <input type="checkbox" required />
          <Label caption="Akceptuję politykę prywatności i wyrażam zgodę na kontakt" />
        </CheckboxWrapper>
        <ModalSubmitButton type="submit">Zapisz się!</ModalSubmitButton>
      </ModalContentWrapper>
    </Modal>
  );
};

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-45%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '50rem',
    maxHeight: '60rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '#f0f5f6',
    boxShadow: '-2px 4px 10px rgba(115, 124, 142, 0.09)',
    borderRadius: '2rem',
    zIndex: '1000',
  },
};

const ModalLabel = styled(Label)`
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding: 1rem;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xs};
    padding: 2.5rem 1rem 1rem 1rem;
  }
`;

const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;

  p {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xs};
    justify-self: center;
  }
`;

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  span {
    color: ${({ theme }) => theme.colors.mainBlue};
  }
`;

const ModalContentWrapper = styled.form`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const CloseModalButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: white;
  font-size: ${({ theme }) => theme.fontSize.s};
  cursor: pointer;
`;

const ModalSubmitButton = styled(Button)`
  margin: 2rem 0 2rem 0;
  max-height: 5rem;
  width: 100%;
  transition: ease-in 0.2s;

  &:hover {
    transform: translateY(10%);
  }
`;
