import React, { Component } from 'react'
import axios from 'axios'
import FormData from './FormData';

class Description extends Component {
    constructor(props) {
        super(props);
        this.state = {
            procategory: [],
            proBussModel: [],
            show: true
        }
    }


    componentDidMount() {
        axios.get('https://api-test.innoloft.com/product/6781/')
            .then(response =>
                this.setState
                    ({

                        procategory: response.data.categories,
                        proBussModel: response.data.businessModels,
                        show: !this.state.show
                    })
            )
            .catch(err => console.log(err))
    }


    ToggleHandler() {
        this.setState({
            show: !this.state.show
        });
    }


    render() {
        console.log(this.state.procategory);
        return (
            <>

                <button className='cardBtn' onClick={() => this.ToggleHandler()}>Attributes</button>
                <br />

                {
                    this.state.show ?
                        <h3 className='attList' >Categories</h3>
                        :
                        null
                }
                <br />
                {
                    this.state.show ?
                        this.state.procategory.map((list) => <p className='attList'>{list.name}</p>)
                        :
                        null
                }


                <br />
                {
                    this.state.show ?
                        <FormData />
                        :
                        null
                }

                <br />

                {
                    this.state.show ?
                        <h3 className='attList'>Business Models</h3>
                        :
                        null
                }
                <br />

                {
                    this.state.show ?
                        this.state.proBussModel.map((model) => <p className='attList'>{model.name}</p>)
                        :
                        null
                }
                <br />
                {
                    this.state.show ?
                        <FormData />
                        :
                        null
                }
                <br />
                {
                    this.state.show ?
                        <label htmlFor="#">TRL -
                    <select id="trlSection">
                                <option value="trl1">Basic principles observed and reported</option>
                                <option value="trl2">Technology concept and/or application formulated.</option>
                                <option value="trl3">Analytical and experimental critical function and/or characteristic proof of concept.</option>
                                <option value="trl4">Component and/or breadboard validation in laboratory environment</option>
                                <option value="trl5" >System/subsystem model or prototype demonstration in a relevant environment</option>
                                <option value="trl6" >System prototype demonstration in an operational environment.</option>
                                <option value="trl7" >Actual system completed and qualified through test and demonstration.</option>
                                <option value="trl8" >Actual system proven through successful mission operations</option>
                            </select>
                        </label>

                        :
                        null
                }


                {
                    this.state.show ?
                        <button style={{position:'relative' , top:'40px' , right:'320px', padding:'7px 30px', background:'#0D75BF' , borderRadius:'7px', color :'#fff'}} type= 'submit'>Submit</button>
                        :
                        null
                }
            </>
        );
    }
}

export default Description;