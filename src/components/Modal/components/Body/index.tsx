import styles from './styles.module.scss';

interface ModalBodyProps {
  children: React.ReactNode;
  className?: string;
}
const ModalBody = ({ children, className }: ModalBodyProps) => {
  const modalBodyStyles = [styles.body, className].join(' ');
  return <div className={modalBodyStyles}>{children}</div>;
};

export default ModalBody;
