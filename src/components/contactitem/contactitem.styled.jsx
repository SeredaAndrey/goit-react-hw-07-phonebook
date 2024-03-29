import styled from '@emotion/styled';

export const ContactItemContainer = styled.li`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[6]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[6]};

  border-radius: ${p => p.theme.radii.ml};

  align-items: center;

  background-color: ${p => p.theme.color.background};

  display: flex;

  height: ${p => p.theme.sizes.height.friendsItem};

  list-style-type: none;
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]};
  }
  > a {
    display: flex;

    margin-top: ${p => p.theme.space[0]};
    margin-right: ${p => p.theme.space[0]};
    margin-bottom: ${p => p.theme.space[0]};
    margin-left: ${p => p.theme.space[0]};

    padding-top: ${p => p.theme.space[4]};
    padding-right: ${p => p.theme.space[4]};
    padding-bottom: ${p => p.theme.space[4]};
    padding-left: ${p => p.theme.space[4]};

    // width: ${p => p.theme.sizes.width.buttonIco};
    // height: ${p => p.theme.sizes.height.buttonIco};

    border-radius: ${p => p.theme.radii.xl};

    text-decoration: none;

    color: ${p => p.theme.color.primary};

    background-color: ${p => p.theme.color.background};

    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      background-color: ${p => p.theme.color.backgroundAccent};
    }
  }
`;

export const ContactName = styled.h3`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[4]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const ContactTelephone = styled.p`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: ${p => p.theme.space[0]};

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const DelButon = styled.button`
  margin-top: ${p => p.theme.space[0]};
  margin-right: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  margin-left: auto;

  padding-top: ${p => p.theme.space[0]};
  padding-right: ${p => p.theme.space[0]};
  padding-bottom: ${p => p.theme.space[0]};
  padding-left: ${p => p.theme.space[0]};

  width: ${p => p.theme.sizes.width.buttonIco};
  height: ${p => p.theme.sizes.height.buttonIco};

  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.color.primary};

  border-color: transparent;
  border-radius: ${p => p.theme.radii.round};

  background-color: ${p => p.theme.color.background};

  cursor: pointer;

  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${p => p.theme.color.backgroundAccent};
  }
`;
