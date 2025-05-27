import UserItem from '../components/UserItem';
 const renderItemForList = ({ item }, onShow, onEdit, onDelete) => {
    return (
        <UserItem 
            user={item}
            onShow={() => onShow(item.id)}
            onEdit={() => onEdit(item.id)}
            onDelete={() => onDelete(item.id)}
        />
    )
}
export default renderItemForList