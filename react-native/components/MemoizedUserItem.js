
import React, { useCallback } from 'react'
import UserItem from './UserItem'

const MemoizedUserItem = React.memo(({ item, onShow, onEdit, onDelete }) => {
  const handleShow = useCallback(() => onShow(item.id, item.userName), [item.id, item.userName, onShow])
  const handleEdit = useCallback(() => onEdit(item.id), [item.id, onEdit])
  const handleDelete = useCallback(() => onDelete(item.id), [item.id, onDelete])

  return (
    <UserItem
      user={item}
      onShow={handleShow}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  )
})

export default MemoizedUserItem
