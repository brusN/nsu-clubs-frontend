import React, {useState} from 'react';

const SignInForm = ({login, className}) => {
    const [formUsername, setFormUsername] = useState('')

    const handleUsernameInputChange = (e) => {
        setFormUsername(e.target.value)
    }

    const handleLoginButtonClick = (e) => {
        e.preventDefault()
        login(formUsername === '' ? 'Гость': formUsername)
    }

    return <div className={className}>
        <form>
            <div className="form-group">
                <input
                    className="form-control" id="exampleInputUsername"
                    aria-describedby="usernameHelp"
                    placeholder="Введите никнейм"
                    onChange={handleUsernameInputChange}
                />
            </div>
            <button type="submit" className="btn btn-outline-success mt-2 w-100" onClick={handleLoginButtonClick}>Войти</button>
        </form>
    </div>
};

export default SignInForm;