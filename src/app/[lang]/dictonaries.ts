import 'server-only'

export interface DictType {
    loginpage: {
        loginform: {
            title: string,
            inputs: {
                email: string,
                password: string
            },
            buttonSubmit: string,
            forgot: string
        }
    },
    resetpasswordpage: {
        form: {
            title: string,
            inputs: {
            email: string
            },
            buttonsubmit: string,
        }
         waiting_response: string
    }
}

const dictionaries = {
  en: () => import('../dictonaries/en.json').then((module) => module.default),
  bg: () => import('../dictonaries/bg.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: 'en' | 'bg') =>
  dictionaries[locale]()