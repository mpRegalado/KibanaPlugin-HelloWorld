import React, {MouseEvent} from 'react'
import { CoreStart } from '../../../../src/core/public';
import {Link} from 'react-router-dom'

import {
  EuiButton,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiTitle,
  EuiText,
} from '@elastic/eui';

const Greeting = ({title, text, buttonText, link, toasts}:{title: string, text:string, buttonText:string, link:string, toasts:CoreStart['notifications']['toasts']}) => {
    const onClickHandler = (e:MouseEvent) => {
        e.preventDefault()
        toasts.addSuccess(buttonText);
      };
    return (
        <EuiPageContent>
            <EuiPageContentHeader>
            <EuiTitle>
                <h2>
                    {title}
                </h2>
            </EuiTitle>
            </EuiPageContentHeader>
            <EuiPageContentBody>
            <EuiText>
                <p>
                    {text}
                </p>
                <EuiButton type="primary" size="s" onClick={onClickHandler}>
                    <Link to={link}>{buttonText}</Link>
                </EuiButton>
            </EuiText>
            </EuiPageContentBody>
        </EuiPageContent>
    )
}

export default Greeting;