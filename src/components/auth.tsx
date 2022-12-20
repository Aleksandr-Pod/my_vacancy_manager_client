export const Auth = () => {
  const handleSubmit = () => {
    console.log("submit");
    fetch ("http://localhost:5000/auth/google", {method: "get"})
    .then(res => console.log(res))
    .catch(err => console.log(err.message));
  }
  return (
    <>
        <button type="submit" onClick={handleSubmit}>Google Register</button>
    </>
  )
}