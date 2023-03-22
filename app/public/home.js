function Home() {
  return (
    <Card
      class="text-center"
      header="BadBank Home Page"
      title="Welcome to BadBank"
      text="Please login or create an account to access other parts of this website."
      body={
        <>
          <div
            id="homephotdiv"
            className="container"
            style={{ maxWidth: "200px" }}
          >
            <p class="text-center">
              <strong> </strong>
            </p>
            <img
              src="badBankImg.jpg"
              className="img-fluid"
              alt="Responsive image"
            />
          </div>
        </>
      }
    />
  );
}
