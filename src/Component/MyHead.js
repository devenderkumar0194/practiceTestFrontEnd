const MyHead = (props) => {

    return (<>
        <div class="container-fluid p-5 bg-primary text-white text-center">
            <h1>{ props.heading}</h1>
            <p>{ props.desc }</p> 
      </div>
    </>);

}

export default MyHead;