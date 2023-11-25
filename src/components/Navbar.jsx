import useCount from "../hooks/useCount";

const Navbar = () => {
      const { dislikeCount, likeCount } = useCount();
	return (
		<>
            <div>{dislikeCount}</div>
            <div>{likeCount}</div>
		</>
	);
};

export default Navbar;
