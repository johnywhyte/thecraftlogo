function CircularBtn(props) {
    return <center>
        <a href={props.link} style={{ padding: "13px", borderRadius: '100px' }} className='btn btn-lg btn-dark'>
            <span style={{ fontWeight: '500', fontSize: '18px' }}>{props.text} &raquo;</span>
        </a>
    </center>;
}

export default CircularBtn;