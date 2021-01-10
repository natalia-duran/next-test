import FormLayout from '../FormLayout/FormLayout';
import { useForm } from "react-hook-form";
import FormCounter from '../FormCounter/FormCounter';

const Step1 = ({handler, stepsCouter}) => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        handler(data);
        stepsCouter();
    }

    return(
        <div>
        
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor='fullname'>Fullname</label>
                        <input 
                            ref={register}
                            name='fullname'
                            type='text'
                            id='fullname' 
                        />
                    </div>

                    <div>
                        <label htmlFor='docType'>Document type</label>
                        <input 
                            ref={register}
                            name='docType'
                            type='text'
                            id='docType'
                        />
                    </div>

                    <div>
                        <label htmlFor='document'>Document</label>
                        <input 
                            ref={register}
                            name='document'
                            type='text'
                            id='document'
                        />
                    </div>

                    <div>
                        <label htmlFor='email'>Email</label>
                        <input 
                            ref={register}
                            name='email'
                            type='email'
                            id='email'
                        />
                    </div>

                    <input type="submit" value="Next" />
                </form>


        </div>
    )
} 

Step1.Layout = FormLayout;

export default Step1;