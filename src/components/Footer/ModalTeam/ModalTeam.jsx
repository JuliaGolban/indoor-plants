import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { closeModalWindow } from 'hooks/modalWindow';
import { cleanModal } from 'redux/modal/operation';
import { modalComponent } from 'redux/modal/selectors';
import { TeamList } from '../TeamList/TeamList';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';
import { BackDrop, Modal, ButtonClose, IconClose } from './ModalTeam.styled';
import { Title } from 'components/baseStyles/CommonStyle.styled';

export const ModalTeam = () => {
  const [developers] = useState([]);
  const [isLoading] = useState(false);
  const [error] = useState(null);

  const modal = useSelector(modalComponent);

  // useEffect(() => {
  //   (async function getData() {
  //     setIsLoading(true);
  //     try {
  //       const { data } = await fetchData('/developers');
  //       setDevelopers(data);
  //       if (!data) {
  //         return onFetchError('Whoops, something went wrong');
  //       }
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   })();
  // }, []);

  //close modal window
  const dispatch = useDispatch();
  const closeModalTeam = e => {
    e.preventDefault();
    dispatch(cleanModal());
    closeModalWindow(e);
  };

  return createPortal(
    Object.values(modal)[0] === 'developers' && (
      <BackDrop
        onClick={e => {
          if (e.currentTarget === e.target) closeModalTeam(e);
        }}
      >
        <Modal>
          <ButtonClose
            type="button"
            onClick={e => closeModalTeam(e)}
            aria-label="Close modal"
          >
            <IconClose />
          </ButtonClose>
          <Title
            as="h2"
            size="20px"
            sizeTablet="26px"
            margin="0 0 20px 0"
            marginTablet="0 0 20px 0"
          >
            Development team
          </Title>
          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError('Whoops, something went wrong')}
          {developers.length > 0 && !error && (
            <TeamList developers={developers} />
          )}
        </Modal>
      </BackDrop>
    ),
    document.querySelector('#popup-root'),
  );
};
