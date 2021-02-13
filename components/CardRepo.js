import styled from 'styled-components'
import Link from 'next/link'

const CardRepo = ({ dataRepo }) => {
  return dataRepo.map((repo) => (
    <Link href={repo.html_url} key={repo.id}>
      <a target='_blank'>
        <Card>
          <CardHeader>
            <h2>{repo.name}</h2>
          </CardHeader>
          <CardBody>
            <span>{repo.language}</span>
            <DateRepo>
              <p>{repo.created_at}</p>
              <p>{repo.pushed_at}</p>
            </DateRepo>
          </CardBody>
          <CardFooter>
            <p>{repo.description}</p>
          </CardFooter>
        </Card>
      </a>
    </Link>
  ))
}

export default CardRepo

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--radius);
  border: 1px solid var(--color-black);
  background-color: var(--color-white);
  padding: 5px;
  margin: 15px 10px;
  &:hover {
    transition: var(--transition);
    opacity: 0.5;
  }
`

const CardHeader = styled.div`
  text-transform: capitalize;
  h2 {
    margin: 0;
    letter-spacing: var(--spacing);
    font-weight: bolder;
    color: var(--color-secondary);
  }
`
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 14px;
    margin: 10px 0;
    letter-spacing: var(--spacing);
    font-weight: 600;
    color: var(--color-black);
  }
`
const DateRepo = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    margin-top: 10px;
    max-width: min-content;
    font-size: 12px;
    letter-spacing: var(--spacing);
    font-weight: 300;
    color: var(--color-black);
  }
`

const CardFooter = styled.div`
  p {
    text-align: end;
    overflow: hidden;
    letter-spacing: var(--spacing);
    color: var(--color-primary);
  }
`