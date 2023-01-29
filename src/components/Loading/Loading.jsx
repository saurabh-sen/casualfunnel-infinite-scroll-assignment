import loading from '../../assets/loading.svg'

const Loading = () => {
  return (
    <div className='loading flex justify-center items-center'>
        <img src={loading} alt="loading" />
    </div>
  )
}

export default Loading