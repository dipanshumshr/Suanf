import "./RightSide.css"

function RightSide() {
  return (
    <div className='Right'>
      <button className="create-btn">
        <span className="material-symbols-outlined">add</span>
        Create
      </button>

      <div className="right-icon">
        <button className="see-plans">
          <span className="material-symbols-outlined">diamond</span>
          See plans
        </button>

        <button className="notification">
          <span className="material-symbols-outlined">
            notifications
          </span>
        </button>

        <button className="help">
          <span className="material-symbols-outlined">
            help
          </span>
        </button>

        <button className="settings">
          <span className="material-symbols-outlined">
            settings
          </span>
        </button>

        <button className="settings">
          <span className="material-symbols-outlined">
            account_circle
          </span>
        </button>
      </div>

    </div>
  )
}

export default RightSide;
