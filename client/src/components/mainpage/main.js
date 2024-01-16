import { Link } from "react-router-dom";
import ImageSlide from "./imageSlide";
import AdComponent from "./advertCom";
import Products from "./products";

function Main(){
  return(
    <div>
      <ImageSlide />
      <AdComponent />
      <Products />
      <div><Link to='/detail'>상세페이지</Link></div>
      <div>
        <Link to="/test"><h2 className='KJH_testpage'>상품 목록 테스트</h2></Link>
      </div>
      <div>
        <Link to="/product/new"><h2 className='KJH_testpage'>등록 테스트</h2></Link>
      </div>
      <div>
        <Link to="/mypage"><h2 className='KJH_testpage'>마이페이지</h2></Link>
      </div>
      
      
      {Products.length > 0 && Products.map((item, index) => (
        <div key={index}>
          <Link to={`/detail/${Products[index]._id}`}>
            <div className='KJH_mainpage_list'>
              {item.title}
            </div>
          </Link>
        </div>
      ))}

      <div className='KJH_product_1'>
        {Products.length > 0 && ( // 조건부 렌더링
          <Link to={`/detail/${Products[1]._id}`}>첫 번째 상품</Link>
        )}
      </div>
    </div>
  )
};

export default Main;