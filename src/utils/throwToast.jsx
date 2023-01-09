import toast from 'react-hot-toast'

export const throwToast = (promise, loading, success) => {
  toast.promise(promise, {
    loading,
    success,
    error: err => {
      for (const key in err.data.errors) {
        return `${err.data.errors[key][0]}`
      }
    }
  })
}

export const removeConfirmation = deletePermanently =>
  toast(
    t => (
      <div
        style={{
          display: 'grid',
          gap: '0.5rem',
          justifyItems: 'center',
          borderRadius: 10,
          background: '#333',
          color: '#fff'
        }}
      >
        <span style={{ textAlign: 'center' }}>
          Are you sure you want to permanently delete this item?
        </span>
        <div
          style={{
            display: 'flex',
            gap: '0.5rem'
          }}
        >
          <button
            style={{
              border: 0,
              backgroundColor: '#fd4a4a',
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: 5
            }}
            onClick={() => {
              toast.dismiss(t.id)
              deletePermanently()
            }}
          >
            Delete
          </button>
          <button
            style={{
              border: 0,
              backgroundColor: '#fff',
              color: '#000',
              padding: '0.5rem 1rem',
              borderRadius: 5
            }}
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ),
    {
      duration: 5000
    }
  )
