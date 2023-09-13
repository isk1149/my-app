const style = {
    width: "100px",
    padding: "6px",
    borderRadisu: "8px",
};

export const EditButton = props => {
    const {isAdmin} = props;

    return (
        <button style={style} disabled={!isAdmin}>수정</button>
    );
};