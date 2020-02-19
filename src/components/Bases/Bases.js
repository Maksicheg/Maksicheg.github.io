import React, { Component } from 'react';
import './Bases.css';
import Layout from '../Layout/Layout';
import * as baseActions from '../../store/actions/index';
import { connect } from 'react-redux';
import PizzaMaker from '../../containers/PizzaMaker/PizzaMaker';


class Bases extends Component {

    state = {
        show: true
    }

    onDisplayBasesHandler = () => {
        this.setState({ show: false })
    }

    render() {

        let displayApp = null;

        displayApp = this.state.show ?
            null :

            (
                <Layout><PizzaMaker /></Layout>
            )


        return (
            <React.Fragment>
                <div className="bases" style={
                    this.state.show ? { display: 'flex' } : { display: 'none' }
                }>
                    <div>Please, Select a pizza base to get started </div>

                    <div className="bases_container">
                        <div className="base" onClick={() => {
                            this.props.onBaseAdded('baseTomato')
                            this.onDisplayBasesHandler()
                        }
                        }>
                            <div className="base_tomato"></div>
                            <p>tomato base</p>
                        </div>

                        <div className="base" onClick={() => {
                            this.props.onBaseAdded('baseThin')
                            this.onDisplayBasesHandler()
                        }
                        }>
                            <div className="base_thin"></div>
                            <p>thin base</p>
                        </div>

                        <div className="base" onClick={() => {
                            this.props.onBaseAdded('baseUsual')
                            this.onDisplayBasesHandler()
                        }
                        }>
                            <div className="base_usual"></div>
                            <p>usual base</p>
                        </div>
                    </div>
                </div>
                {displayApp}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        bases: state.bases
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onBaseAdded: (baseName) => dispatch(baseActions.addBase(baseName)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bases);
