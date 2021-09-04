const Friend = (props) => {
  const { friend } = props;
  return (
    <div className='friend'>
      <p>{friend.age}</p>
      <p>{friend.name}</p>
      <p>{friend.email}</p>
    </div>
  );
};

export default Friend;
