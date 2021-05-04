import { useState } from 'react'

function useForm(inicialState) {
    const [form, setForm] = useState(inicialState)

    const onChange = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    const resetForm = () => {
        setForm(inicialState)
    }

    return [form, onChange, resetForm]
}

export default useForm