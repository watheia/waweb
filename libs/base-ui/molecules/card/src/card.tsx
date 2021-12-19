import { Link } from '@waweb/base-ui.atoms.link';
// import { CopyBox } from '@teambit/documenter.ui.copy-box';
import { Heading } from '@waweb/base-ui.atoms.heading';
import { Text } from '@waweb/base-ui.atoms.text';
import React from 'react';
import * as styles from './card.module.scss';

export type CardProps = {
  /**
   * link for the card
   */
  link?: string;
  /**
   * heading for the card
   */
  heading?: string;
  /**
   * text for the card
   */
  text?: string;
  /**
   * command for the copy box component
   */
  command?: string;
};

export function Card({ heading, command, text, link }: CardProps) {
  return (
    <div className={styles.card}>
      <Link href={link}>
        <Heading element="h3" className={styles.heading}>
          {heading}
        </Heading>
        <Text className={styles.text} text={text ?? ''} />
      </Link>
      {/* {command ? <CopyBox className={styles.copyBox}>{command}</CopyBox> : null} */}
    </div>
  );
}
