import useWindow from '../../hooks/useWindow';

export default ({ render }) => {
  const { width } = useWindow();
  console.log(width);
  return render(width);
};
