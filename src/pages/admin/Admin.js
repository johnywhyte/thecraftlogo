import React, { useState, useEffect, useCallback } from 'react'
import { Spinner, Modal, Button } from 'react-bootstrap'

import styles from './Admin.module.css'
import Nav from '../../components/nav'
import logo from '../../assets/images/logo.png'
import { baseUrl } from '../../App'

const CenteredModal = (props) => {
  const { mark, id } = props
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Are you Sure?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: 'right' }}>
        <Button
          onClick={() => mark(id)}
          variant="dark"
          style={{ marginRight: 8 }}
        >
          Yes
        </Button>
        <Button onClick={props.onHide} variant="outline-dark">
          No
        </Button>
      </Modal.Body>
    </Modal>
  )
}

function Admin() {
  const [passcode, setPasscode] = useState('')
  const [filter, setFilter] = useState('all')
  const [isVerified, setIsVerified] = useState(false)
  const [orders, setOrders] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [message, setMessage] = useState('')
  const [modalShow, setModalShow] = useState(false)
  const [selectedId, setSelectedId] = useState('')

  const handleGetOrders = useCallback(
    async (pageChange) => {
      let page
      if (pageChange === 'next') {
        page = currentPage + 1
      } else if (pageChange === 'prev') {
        page = currentPage - 1
      } else {
        page = currentPage
      }
      let params
      if (filter === 'all') {
        params = `passcode=${passcode}`
      } else {
        params = `status=${filter}&passcode=${passcode}`
      }
      try {
        setIsLoading(true)
        const response = await fetch(
          `${baseUrl}/all-orders?page=${page}&${params}`
        )
        const {
          data: { data, current_page, last_page }
        } = await response.json()
        setOrders(data)
        setCurrentPage(current_page)
        setTotalPages(last_page)
        setError('')
      } catch (error) {
        console.error(error)
        setError(error?.message)
      } finally {
        setIsLoading(false)
      }
    },
    [filter, currentPage, passcode]
  )

  const handleVerifyPasscode = useCallback(async () => {
    let storedCode = sessionStorage.getItem('adminCode')
    if (storedCode) {
      setPasscode(storedCode)
      setIsVerified(true)
      return
    }
    if (isSubmitted) {
      setIsLoading(true)
      try {
        const response = await fetch(
          `${baseUrl}/verify_passcode`,
          {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify({ passcode })
          }
        )
        if (response.status === 200) {
          sessionStorage.setItem('adminCode', passcode)
          setIsVerified(true)
          setError('')
        } else {
          sessionStorage.removeItem('adminCode')
          setIsVerified(false)
          let data = await response.json()
          setError(data?.message)
        }
      } catch (error) {
        console.error(error)
        setError(error?.message)
      } finally {
        setIsLoading(false)
        setIsSubmitted(false)
      }
    }
  }, [passcode, isSubmitted])

  const handleFilter = (e) => {
    setCurrentPage(1)
    const { name } = e.target
    setFilter(name)
  }

  const handleMarkCompleted = async (id) => {
    try {
      setIsLoading(true)
      const response = await fetch(
        `${baseUrl}/complete_order/${id}?passcode=${passcode}`
      )
      if (response.status === 200) {
        setMessage('Order Marked as Fulfilled')
        setTimeout(() => setMessage(''), 2500)
        await handleGetOrders()
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
      setModalShow(false)
    }
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
    handleVerifyPasscode()
  }

  useEffect(() => {
    handleVerifyPasscode()
  }, [handleVerifyPasscode])

  useEffect(() => {
    if (isVerified) {
      handleGetOrders()
    }
  }, [filter, isVerified, handleGetOrders])

  return (
    <div className={styles.root}>
      <header className="App-header" style={{ marginBottom: 100 }}>
        <Nav logo={logo} />
      </header>
      {isLoading && (
        <div style={{ textAlign: 'center' }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {error && (
        <div className="alert alert-danger mb-3">
          <div className="container">{error}</div>
        </div>
      )}
      {message && (
        <div className="alert alert-success mb-3">
          <div className="container">{message}</div>
        </div>
      )}

      {!isVerified && (
        <div className={styles.auth_container}>
          <p>
            <input
              className={styles.input}
              placeholder="Enter your Passcode"
              onChange={(e) => setPasscode(e.target.value)}
              type="password"
            />
            <button className={styles.btn} onClick={handleSubmit}>
              Submit
            </button>
          </p>
        </div>
      )}
      {isVerified && (
        <div style={{ padding: '0 5%' }}>
          <h1 style={{ marginBottom: 32 }}>View Orders</h1>
          <p>
            <button
              className={styles.btn2}
              style={
                filter === 'all'
                  ? {}
                  : {
                      backgroundColor: '#fff',
                      color: '#000',
                      outline: '1px solid black'
                    }
              }
              name="all"
              onClick={handleFilter}
            >
              All
            </button>
            <button
              className={styles.btn2}
              style={
                filter === 'pending'
                  ? {}
                  : {
                      backgroundColor: '#fff',
                      color: '#000',
                      outline: '1px solid black'
                    }
              }
              name="pending"
              onClick={handleFilter}
            >
              Pending
            </button>
            <button
              className={styles.btn2}
              style={
                filter === 'completed'
                  ? {}
                  : {
                      backgroundColor: '#fff',
                      color: '#000',
                      outline: '1px solid black'
                    }
              }
              name="completed"
              onClick={handleFilter}
            >
              Completed
            </button>
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Tagline</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Date</th>
                  <th>Price($)</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orders?.map(
                  ({
                    order: {
                      name,
                      tagline,
                      email,
                      phone,
                      updated_at,
                      id,
                      amount
                    },
                    status
                  }) => {
                    const d = new Date(updated_at)
                    let dateText = d.toLocaleString()
                    return (
                      <tr key={id}>
                        <td>{name}</td>
                        <td>{tagline}</td>
                        <td>{email}</td>
                        <td>{phone}</td>
                        <td>{dateText}</td>
                        <td>{amount}</td>
                        <td>
                          {
                            <>
                              <span
                                style={{
                                  color:
                                    status === 'completed'
                                      ? 'green'
                                      : status === 'pending'
                                      ? '#DBA800'
                                      : 'black',
                                  textTransform: 'capitalize'
                                }}
                              >
                                {status}
                              </span>
                              <br />
                            </>
                          }
                          {status !== 'completed' && (
                            <button
                              className={styles.btn}
                              style={{ fontSize: 14 }}
                              onClick={() => {
                                setSelectedId(id)
                                setModalShow(true)
                              }}
                            >
                              Mark Completed
                            </button>
                          )}
                        </td>
                      </tr>
                    )
                  }
                )}

                {
                  orders?.length === 0 && <tr><td>No orders found</td></tr>
                }
              </tbody>
            </table>
          </div>

          <div
            style={{
              marginTop: 16,
              display: 'flex',
              alignItems: 'flex-end',
              flexDirection: 'column'
            }}
          >
            <div>{isLoading && <Spinner animation="border" />}</div>
            <div>
              <button
                className={styles.btn}
                style={{ marginRight: 4 }}
                disabled={currentPage <= 1}
                onClick={() => handleGetOrders('prev')}
              >
                Prev
              </button>
              <button
                className={styles.btn}
                disabled={currentPage >= totalPages}
                onClick={() => handleGetOrders('next')}
              >
                Next
              </button>
            </div>

            <p>
              Page {currentPage} of {totalPages}
            </p>
          </div>
        </div>
      )}
      <CenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        mark={handleMarkCompleted}
        id={selectedId}
      />
    </div>
  )
}

export default Admin
