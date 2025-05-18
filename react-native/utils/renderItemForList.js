import UserItem from '../components/UserItem';
 const renderItemForList = ({ item }, onShow, onEdit, onDelete) => {
    return (
        <UserItem 
            user={item}
            onShow={() => onShow(item)}
            onEdit={() =>onEdit(item)}
            onDelete={() =>onDelete(item)}
        />
    )
}
export default renderItemForList