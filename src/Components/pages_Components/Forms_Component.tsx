import { useForm} from 'react-hook-form';
import {z} from 'zod';
import * as S from './styles'
import { zodResolver } from '@hookform/resolvers/zod';

import { useCallback, useEffect } from 'react';
import axios from 'axios';

const schemaForms = z.object({
    address: z.object({
        zipCode: z.string().min(9, 'Por favor informe um CEP válido'),
        street: z.string().min(1, 'Por favor informe um Endereço válido'),
        number: z.string().min(1, 'Por favor informe um número válido'),
        district: z.string().min(1, 'Por favor informe um Bairro válido'),
        complement: z.string(),
        city: z.string().min(1, 'Por favor informe uma Ciadade válida'),
        state: z.string().max(2, 'Por favor informe um Estado válido'),
    })
}).transform((field) => ({
    address: {
        zipCode: field.address.zipCode,
        city: field.address.city,
        district: field.address.district,
        street: field.address.street,
        number: field.address.number,
        complement: field.address.complement,
        state: field.address.state,
    }
}))

type FormProps = z.infer<typeof schemaForms>

export default function Cep(){
    const { handleSubmit, 
        register, 
        watch,
        setValue,
        formState: {errors} 
    } = useForm<FormProps>({
        criteriaMode: 'all',
        mode: 'all',
        resolver: zodResolver(schemaForms),
        defaultValues: {
            address: {
                city: '', 
                complement: '',
                district: '',
                number: '', 
                state: '',
                street:'',
                zipCode: ''
            }
        }
    });

    const zipCode = watch('address.zipCode');

    const handleFormSubmit = (data: FormProps) => {
        console.log(data)
    };
    

    const handleFetchAddress = useCallback(async (zipCode: string) => {
        const {data} = await axios.get(
            `https: //viacep.com.br/ws/${zipCode}/json/`
        );
    }, []);
    ///console.log(errors);

    useEffect(( ) => {
        setValue('address.zipCode', (zipCode));

        if(zipCode.length != 9 ) return;
        handleFetchAddress(zipCode);
    }, [handleFetchAddress,setValue, zipCode])

    return(
        <>
            <h2>Cep</h2>

            <form onSubmit={handleSubmit(handleFormSubmit)}>

                <input {...register('address.zipCode')} type="text" placeholder='CEP'
                maxLength={9} />
            {errors.address?.zipCode?.message && (
            <p>
                {errors.address?.zipCode?.message}
            </p>
            )}
                <input {...register('address.street')} type="text" placeholder='Logradouro' />
                {errors.address?.street?.message && (
            <p>
                {errors.address?.street?.message}
            </p>
            )}

                <input {...register('address.district')} type="text" placeholder='Bairro' />
                {errors.address?.district?.message && (
            <p>
                {errors.address?.district?.message}
            </p>
            )}
                <input {...register('address.complement')} type="text" placeholder='Complemento' />
                <input {...register('address.city')} type="text" placeholder='Cidade' />
                {errors.address?.city?.message && (
            <p>
                {errors.address?.city?.message}
            </p>
            )}
                <input {...register('address.state')} type="text" placeholder='UF' maxLength={2} />
                {errors.address?.state?.message && (
            <p>
                {errors.address?.state?.message}
            </p>
            )}

                <button type='submit'>Enviar</button>
            </form>
        </>
    )
}