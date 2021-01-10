import FormLayout from '../FormLayout/FormLayout';
import { useForm } from "react-hook-form";

const Step2 = ({handler, stepsCouter}) => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        handler(data);
        stepsCouter();
    }

    return(
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='companyName'>Company Name</label>
                    <input 
                        ref={register}
                        name='companyName'
                        type='text'
                        id='companyName' 
                    />
                </div>

                <div>
                    <label htmlFor='recruiterName'>Recruiter Name</label>
                    <input 
                        ref={register}
                        name='recruiterName'
                        type='text'
                        id='recruiterName'
                    />
                </div>

                <div>
                    <label htmlFor='address'>Address</label>
                    <input 
                        ref={register}
                        name='address'
                        type='text'
                        id='address'
                    />
                </div>

                <input type='submit' value="Next" />
            </form>
        </div>
    )
} 

Step2.Layout = FormLayout;

export default Step2;