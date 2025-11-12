import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const vacaturesDirectory = path.join(process.cwd(), 'content/vacatures')
const blogsDirectory = path.join(process.cwd(), 'content/blogs')

export interface Vacature {
  slug: string
  title: string
  location: string
  type: string
  salary: string
  experience: string
  education: string
  posted: string
  featured: boolean
  content: string
}

export interface BlogPost {
  slug: string
  title: string
  author: string
  date: string
  excerpt: string
  image: string
  category: string
  featured: boolean
  content: string
}

export function getVacatures(): Vacature[] {
  if (!fs.existsSync(vacaturesDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(vacaturesDirectory)
  const allVacatures = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(vacaturesDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        location: data.location,
        type: data.type,
        salary: data.salary,
        experience: data.experience,
        education: data.education,
        posted: data.posted,
        featured: data.featured || false,
        content,
      }
    })

  return allVacatures.sort((a, b) => 
    new Date(b.posted).getTime() - new Date(a.posted).getTime()
  )
}

export function getVacatureBySlug(slug: string): Vacature | null {
  try {
    const fullPath = path.join(vacaturesDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      location: data.location,
      type: data.type,
      salary: data.salary,
      experience: data.experience,
      education: data.education,
      posted: data.posted,
      featured: data.featured || false,
      content,
    }
  } catch {
    return null
  }
}

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(blogsDirectory)
  const allPosts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(blogsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        author: data.author,
        date: data.date,
        excerpt: data.excerpt,
        image: data.image,
        category: data.category,
        featured: data.featured || false,
        content,
      }
    })

  return allPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      author: data.author,
      date: data.date,
      excerpt: data.excerpt,
      image: data.image,
      category: data.category,
      featured: data.featured || false,
      content,
    }
  } catch {
    return null
  }
}
