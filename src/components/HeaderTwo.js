
const HeaderTwo = (data) => {
    const { images } = data;
    return (
      <div className="img_container">
        <img className='h_img' src={images[0]} alt="banner" />
        <img className='h_img' src={images[1]} alt="banner" />
        <img className='h_img' src={images[2]} alt="banner" />
        <img className='h_img' src={images[3]} alt="banner" />
        <img className='h_img' src={images[4]} alt="banner" />
        <img className='h_img' src={images[5]} alt="banner" />
        <img className='h_img' src={images[6]} alt="banner" />
        <img className='h_img' src={images[7]} alt="banner" />
        <img className='h_img' src={images[8]} alt="banner" />
        <img className='h_img' src={images[9]} alt="banner" />
        <img className='h_img' src={images[10]} alt="banner" />
        <img className='h_img' src={images[11]} alt="banner" />
      </div>
    )
  }

  export default HeaderTwo;