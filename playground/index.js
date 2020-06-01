const App = () => {
  const [token, setToken] = React.useState('')
  const [form, setForm] = React.useState({ email: '', password: '' })
  const [user, setUser] = React.useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    axios
      .post('http://localhost:3001/api/login', {
        email: form.email,
        password: form.password,
      })
      .then((res) => {
        setToken(res.data.accessToken)
      })
      .catch((err) => {
        setToken('')
      })
  }

  const handleFetchMe = () => {
    axios
      .get('http://localhost:3001/api/me', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((res) => {
        setUser(res.data)
      })
      .catch((err) => setUser(err.response.data))
  }

  const handleLogout = () => {
    setToken('')
  }

  return (
    <div>
      {token ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              placeholder="email"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      )}

      <button onClick={handleFetchMe}>Fetch /Me</button>

      <hr />
      <h4>Content</h4>
      <pre>{user && JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
