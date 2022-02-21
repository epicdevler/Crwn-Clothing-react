import React from "react";
import './form-input.styles.scss'

export const FormInput = ({handleChange, label, ...members}) => {
    return (
        <div className={'group'}>

            <input type={''} className={'form-input'} onChange={handleChange} {...members} />
            {
                label ?
                    (<label htmlFor={'members.id'}
                            className={`${members.value.length} ? 'shrink' : '' form-input-label`}>
                        {label}
                    </label>)
                    : null
            }
        </div>
    )
}