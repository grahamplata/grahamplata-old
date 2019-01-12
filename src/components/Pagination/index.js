<>
  <Button.Group compact>
    <Button as={Link} to={prevPage} disabled={isFirst}>
      Prev
    </Button>
    {Array.from({ length: numPages }, (_, i) => (
      <Button
        active={currentPage === i + 1}
        as={Link}
        to={`blog/${i === 0 ? "" : i + 1}`}
        key={i}
      >
        {i + 1}
      </Button>
    ))}
    <Button as={Link} to={nextPage} disabled={isLast}>
      Next
    </Button>
  </Button.Group>
</>;
