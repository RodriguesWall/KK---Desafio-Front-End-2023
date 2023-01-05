
import Pagination from 'react-bootstrap/Pagination';
import React, {useState, useEffect} from "react"
import styles from "./styles.module.scss";

const PaginationComponent = ({
  pageNumber,
  currentPage,
  setCurrentPage
}) => {

  const [page, setPage] = useState([])

  useEffect(() => {
    let aux = []
    for (let index = 0; index < pageNumber; index++) {
      aux.push(index+1)
    }
    setPage(aux)
  }, [
    pageNumber,
    currentPage
  ]);

  const goToPage = (page) => {
    setCurrentPage(page)
  }

  return (
    <>
      <Pagination className={styles.color}>
          <Pagination.Prev  onClick={()=>{goToPage(currentPage > 0 ?(currentPage -1):(0))}} />
        {page.map((item) => {
          let init = (currentPage+1) - 3;
          let finish = (currentPage+1) + 3;

          if(item<finish && item>init){
            return (
              <Pagination.Item 
                active={item === currentPage+1}
                onClick={()=>{goToPage(item-1)}}
                >
              {item}
            </Pagination.Item>
            )
          }
        })}
          <Pagination.Next onClick={()=>{goToPage(currentPage < pageNumber-1 ?(currentPage +1):(currentPage))}}/>
      </Pagination>
    </>
  )
}
export default PaginationComponent;