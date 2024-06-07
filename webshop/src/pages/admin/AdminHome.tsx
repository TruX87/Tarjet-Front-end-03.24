import { Button } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function AdminHome() {
  const { t } = useTranslation();

  return (
    <div>
      {/* {' '} lihtne vahede tegemine */}
      <Button as={Link as any} to="/admin/maintain-categories" variant="primary">{t('maintain-categories')}</Button>{' '} 
      <Button as={Link as any} to="/admin/maintain-shops" variant="secondary">{t('maintain-shops')}</Button>{' '}
      <Button as={Link as any} to="/admin/add-product" variant="success">{t('add-product')}</Button>{' '}
      <Button as={Link as any} to="/admin/maintain-products" variant="warning">{t('maintain-products')}</Button>{' '}
      <Button as={Link as any} to="/admin/maintain-pictures" variant="warning">{t('maintain-pictures')}</Button>{' '}
      <Button as={Link as any} to="/admin/supplier" variant="info">{t('supplier')}</Button>{' '}
      <Button as={Link as any} to="/admin/book-supplier" variant="info">{t('book-supplier')}</Button>{' '}
    </div>
  )
}

export default AdminHome