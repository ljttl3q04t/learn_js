function Restart(props) {
    return (
        <center>
            <button
                class="ui secondary button"
                onClick={() => props.restart()}
                style={{ height: '50px', width: '100px', marginTop: '32px' }}
            >
              Restart Game
            </button>
        </center>
    )

}

export default Restart;