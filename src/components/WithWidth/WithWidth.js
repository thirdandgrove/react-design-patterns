import useWindow from '../../hooks/useWindow';

export default ({ render }) => {
  const { width } = useWindow();
  return render(width);
};
