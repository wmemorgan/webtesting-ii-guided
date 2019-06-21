import React from 'react';
import ReactDOM from 'react-dom';
import { render, getAllByTestId } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'
import 'jest-dom/extend-expect'

import Players from './Players'

it('should render', () => {
  render(<Players />)
})

it('should display default message with no players', () => {
    const { queryByText, toBeInTheDocument } = render(<Players />)
    const defaultMessage = queryByText(/no players/i)

    expect(defaultMessage).toBeInTheDocument()
  }
)

it('should display players', () => {
  const players = [
    { id: 1, name: 'Max' },
    { id: 2, name: 'Greg' },
    { id: 3, name: 'Bobby-Joe' },
  ]

  const playerNames = players.map(p => p.name)

  const { getByText, getAllByTestId } = render(<Players players={players}/>)
  
  getByText(/player list/i)

  const playerDivs = getAllByTestId('player-name')

  expect(playerDivs.length).toBe(players.length)

  const divTexts = playerDivs.map(d => d.textContent)

  expect(playerNames).toEqual(divTexts)
  
})