import React , {Component} from 'react'

import Modal from '../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent,axios) => {

    return class extends Component {

        state ={
            error:null
        }

        componentDidMount(){
            axios.interceptors.request.use(req =>{
                this.setState({error:null})
                return req;
            });

            axios.interceptors.response.use(res => res, err =>{
               this.setState({error:err})
            });
        }

        render(){
            return (
                <div>
                    <Modal show={this.state.error} modalClose={this.cancelHandler} >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }

        cancelHandler = () => {
            this.setState({error:null});
        }
    }
};
export default withErrorHandler;