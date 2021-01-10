import FormLayout from '../FormLayout/FormLayout';
import { useForm } from "react-hook-form";

const Step3 = ({handler, stepsCouter}) => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        handler(data);
        stepsCouter();
    }

    return(
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input 
                        ref={register}
                        name='username'
                        type='text'
                        id='username' 
                    />
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input 
                        ref={register}
                        name='password'
                        type='text'
                        id='password'
                    />
                </div>

                <input type='submit' value="Next" />
            </form>

        </div>
    )
} 

Step3.Layout = FormLayout;

export default Step3;