import React from 'react'

const Login = () => {
  return (
    <div className='container-fluid loginForm'>
      
        <div className="row ">
            <div className="col-12">
                <div className="card bg-dark text-white my-5 mx-auto" style={{borderRadius:"1rem", maxWidth:"400px"}}>
                    <div className="card-body p-5 d-flex flex-column align-items-center mx-auto w-100">
                        <h2 className='fw-bold mb-5'>Giriş yap</h2>
            

                        <input type="email" className='mb-4 mx-5 w-100 ' id='formControl' placeholder='email'/>
                        <input type="password" className='mb-4 mx-5 w-100 ' id='formControl' placeholder='şifre'/>
                        <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Şifrenizi mi unuttunuz?</a></p>
                        <button className='btn btn-outlined btn-light mx-2 px-5'>Giriş yap</button>

                        <div className="d-flex flex-row mt-3 mb-5">
                        <p className="pb-5">Kayıtlı hesabınız yok mu? <a href="/" class="text-white-50 ">Kayıt ol</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        
    </div>
  )
}

export default Login